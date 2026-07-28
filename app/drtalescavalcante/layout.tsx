import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr. Tales Cavalcante | Emagrecimento e Performance",
  description: "Atendimento médico em emagrecimento e performance com Dr. Tales Cavalcante, CRM 27491, em Fortaleza e online.",
};

export default function TalesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
