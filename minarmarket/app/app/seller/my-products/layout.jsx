

export const metadata= {
  title: "My Product | Minar Market",
  description: "Your marketplace for products and services",
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className="font-helvetica">{children}</body>
    </html>
  )
}