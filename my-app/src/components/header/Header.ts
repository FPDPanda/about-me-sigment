import "./header.css";

function Header() {
  return nav(
    { class: "navbar" },
    div({ class: "navbar-brand" }, a({ href: "/" }, "Jean Outeiral")),
    ul(
      { class: "navbar-links" },
      li(a({ href: "/" }, "Home")),
      li(a({ href: "/articles" }, "Articles"))
    )
  );
}

export default Header;
