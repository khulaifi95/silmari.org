import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const markdownContent = `# Zhangda Xu (@khulaifi95)

My learning path as an AI practitioner. Every commit lands on GitHub for you to fork & remix.

## Navigation

- [About](/about.md)
- [Recent Posts](/posts.md)
- [Archives](/archives.md)
- [RSS Feed](/rss.xml)

## Links

- Twitter: [@KhuLaiFiXu95](https://x.com/KhuLaiFiXu95)
- GitHub: [@khulaifi95](https://github.com/khulaifi95)
- LinkedIn: [Zhangda Xu](https://www.linkedin.com/in/zhangdaxu/)
- Email: just4xzd1995@gmail.com

---

*This is the markdown-only version of silmari.org. Visit [silmari.org](https://silmari.org) for the full experience.*`;

  return new Response(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
