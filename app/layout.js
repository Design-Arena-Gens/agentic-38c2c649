import './globals.css'

export const metadata = {
  title: 'Agatha Christie: The Queen of Mystery',
  description: 'Everything you need to know about Agatha Christie',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
