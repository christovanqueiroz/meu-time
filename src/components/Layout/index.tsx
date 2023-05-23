
type LayoutProps = {
  children: React.ReactNode
}
export default function Layout({children}: LayoutProps) {
  return (
    <div className="h-screen w-full bg-lime-100">
      {children}
    </div>
  )
}