import type { ReactNode } from "react";
import { createProductMetadata, ProductSeoLayout } from "../../_seo";

const route = "relays/cmc-256-plus";

export const metadata = createProductMetadata(route);

export default function Layout({ children }: { children: ReactNode }) {
  return <ProductSeoLayout route={route}>{children}</ProductSeoLayout>;
}
