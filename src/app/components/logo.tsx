import Image from "next/image";
import { useTheme } from "next-themes";

// https://nextjs.org/docs/app/api-reference/components/image#unoptimized

export function LogoGithub() {
  const { resolvedTheme } = useTheme();
  return (
    <a
      href="https://github.com/Xupie"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={
          resolvedTheme === "dark"
            ? `/github/github-mark-white.svg`
            : `/github/github-mark.svg`
        }
        alt={"logo of github"}
        width={36}
        height={36}
        className={"hover"}
        unoptimized={true}
      />
    </a>
  );
}

export function HamburgerMenu() {
  const { resolvedTheme } = useTheme();
  return (
    <Image
      src={
        resolvedTheme === "dark"
          ? `/hamburger-menu/hamburger-menu-white.svg`
          : `/hamburger-menu/hamburger-menu.svg`
      }
      alt={"icon of mobile navigation menu"}
      width={36}
      height={36}
      className={"hover"}
      unoptimized={true}
    />
  );
}
