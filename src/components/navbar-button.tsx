export function NavBarButton({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex align-center items-center gap-1">{children}</div>
    );
};

export const NavBarDivClassname = "hover:bg-purple-500 px-5 font-semibold rounded-lg hover:shadow";