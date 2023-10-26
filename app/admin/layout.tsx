import AdminHeader from "./_components/AdminHeader"

type AdminLayoutProps = {
    children: React.ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
    return (
        <div>
            <AdminHeader />
            {children}
        </div>
    )
}

export default AdminLayout