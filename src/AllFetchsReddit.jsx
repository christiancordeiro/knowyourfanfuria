export async function fetchUserComment(accessToken, username, setComment) {
  try {
    const postsUrl = `https://oauth.reddit.com/user/${username}/comments`

    const response = await fetch(postsUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "User-Agent": "furiaggfan", // Reddit exige um User-Agent
      },
    })

    const data = await response.json()

    let contadorFuria = 0

    data.data.children.map((comment) => {
      const body = comment.data.body

      // Verifica se "Furia" ou "Furiagg" estão presentes no comentário
      if (
        body.toLowerCase().includes("furia") ||
        body.toLowerCase().includes("furiagg")
      ) {
        contadorFuria++
      }

      return {
        id: comment.data.id,
        body: body,
      }
    })

    setComment(contadorFuria)
  } catch (error) {
    console.error("Erro ao buscar comentários:", error)
  }
}

export async function fetchUserPosts(accessToken, username, setPosts) {
  try {
    const postsUrl = `https://oauth.reddit.com/user/${username}/submitted`

    const response = await fetch(postsUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "User-Agent": "furiaggfan",
      },
    })

    const data = await response.json()

    let contadorPostFuria = 0

    data.data.children.forEach((post) => {
      const conteudo =
        post.data.title.toLowerCase() + " " + post.data.selftext.toLowerCase()

      if (conteudo.includes("furia") || conteudo.includes("furiagg")) {
        contadorPostFuria++
      }
    })

    setPosts(contadorPostFuria)
  } catch (error) {
    console.error("Erro ao buscar publicações:", error)
  }
}

export async function fetchUserUpvoted(accessToken, username, setUpvoted) {
  try {
    const postsUrl = `https://oauth.reddit.com/user/${username}/upvoted`

    const response = await fetch(postsUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "User-Agent": "furiaggfan", // Reddit exige um User-Agent
      },
    })

    const data = await response.json()

    let contadorUpvoted = 0

    const filtered = data.data.children.map((post) => {
      const titulo = post.data.title.toLowerCase()
      const selftext = post.data.selftext.toLowerCase()

      if (
        titulo.includes("furia") ||
        titulo.includes("furiagg") ||
        selftext.includes("furia") ||
        selftext.includes("furiagg")
      ) {
        contadorUpvoted++
      }

      return {
        titulo: titulo,
        selftext: selftext,
      }
    })

    setUpvoted(contadorUpvoted)
  } catch (error) {
    console.error("Erro ao buscar upvoted:", error)
  }
}
