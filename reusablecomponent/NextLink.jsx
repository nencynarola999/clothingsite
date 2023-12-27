import Link from "next/link";
import { FC, ReactElement } from "react";

// ==============================================================
// type Nextlink = {
//   href: string;
//   className?: string;
//   title: string | ReactElement;
// };
// ==============================================================

const NextLink = (props) => {
  const { href="string", className="string", title="string" } = props;
  // console.log(props,"njnjnj")

  return (
    <Link href={href} className={className}>
      {title}
    </Link>
  );
};

export default NextLink;