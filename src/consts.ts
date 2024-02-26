// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = `Hey I'm Jay 👋`;
export const SITE_DESCRIPTION = `It's me. I'm the problem.`;
export const SOCIAL_MEDIA = {
    github: {
        name: "GitHub",
        link: new URL("https://github.com/heyjaywilson"),
        fontAwesome: "fa-brands fa-github"
    },
    instagram: {
        name: "Instagram",
        link: new URL("https://instagram.com/heyjaywilson"),
        fontAwesome: "fa-brands fa-instagram"
    },
    mastodon: {
        name: "Mastodon",
        link: new URL("https://iosdev.space/@heyjaywilson"),
        fontAwesome: "fa-brands fa-mastodon"
    },
    threads: {
        name: "Threads",
        link: new URL("https://threads.net/@heyjaywilson"),
        fontAwesome: "fa-brands fa-threads"
    }
}

export const NAVIGATION_LOCATIONS = [
    { link: "/", title: "Home", icon: "fa-house" },
    { link: "/about", title: "About", icon: "fa-circle-i" },
    { link: "/archives", title: "Archives", icon: "fa-rectangle-list" },
    // { link: "/follow", title: "Follow", icon: "fa-briefcase" },
  ];