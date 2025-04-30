import React, { useEffect, useState, createContext } from "react"
import {
  fetchUserComment,
  fetchUserPosts,
  fetchUserUpvoted,
} from "./AllFetchsReddit"

export const UserContext = createContext()

export const UserStorage = ({ children }) => {
  const [dados, setDados] = useState(null)
  const [token, setToken] = useState(null)
  const [comment, setComment] = useState(null)
  const [posts, setPosts] = useState(null)
  const [upvoted, setUpvoted] = useState(null)

  const clientId = import.meta.env.VITE_REDDIT_CLIENT_ID
  const clientSecret = import.meta.env.VITE_REDDIT_CLIENT_SECRET
  const redirectUri = import.meta.env.VITE_REDDIT_REDIRECT_URI

  const scope = "identity history read"
  const state = "random_string_123"

  const handleRedditLogin = () => {
    const authUrl = `https://www.reddit.com/api/v1/authorize?client_id=${clientId}&response_type=code&state=${state}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&duration=temporary&scope=${encodeURIComponent(scope)}`

    window.location.href = authUrl
  }

  // 1. Troca o código de autorização por token de acesso
  const fetchAccessToken = async (code) => {
    const tokenUrl = "https://www.reddit.com/api/v1/access_token"
    const body = new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: redirectUri,
    })

    try {
      const response = await fetch(tokenUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
        },
        body: body.toString(),
      })

      const data = await response.json()
      if (data.access_token) {
        setToken(data.access_token)
      } else {
        console.error("Erro ao obter o token:", data)
      }
    } catch (error) {
      console.error("Erro ao trocar o código por token:", error)
    }
  }

  // 2. Buscar dados do usuário
  const fetchUserData = async (accessToken) => {
    try {
      const response = await fetch("https://oauth.reddit.com/api/v1/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "User-Agent": "furiaggfan",
        },
      })
      const data = await response.json()

      const filteredData = data.subreddit
        ? {
            displayName:
              data?.subreddit?.display_name_prefixed || "Carregando...",
            description: data?.subreddit?.public_description || "Carregando...",
            cakeDay:
              new Date(data.created_utc * 1000).toLocaleDateString("pt-BR") ||
              "Carregando...",
            icon:
              data.subreddit.icon_img.replace(/&amp;/g, "&") || "Carregando...",
          }
        : null

      setDados(filteredData)

      fetchUserComment(accessToken, data.name, setComment) // Chama a função para buscar os comentários do usuário
      fetchUserPosts(accessToken, data.name, setPosts) // Chama a função para buscar os posts do usuário
      fetchUserUpvoted(accessToken, data.name, setUpvoted) // Chama a função para buscar os upvoted do usuário
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error)
    }
  }

  // 3. useEffect para detectar "code" na URL !
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get("code")

    if (code && !token) {
      fetchAccessToken(code)
    }
  }, [])

  // 4. useEffect para buscar os dados quando tiver token
  useEffect(() => {
    if (token) {
      fetchUserData(token)
    }
  }, [token])

  //   if (!dados) return <div>Carregando usuário...</div>

  return (
    <UserContext.Provider
      value={{ dados, comment, posts, upvoted, token, handleRedditLogin }}
    >
      {children}
    </UserContext.Provider>
  )
}
