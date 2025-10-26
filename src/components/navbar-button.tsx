export function NavBarButton({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex align-center items-center gap-1 justify-center">{children}</div>
    );
};

export const NavBarDivClassname = "hover:bg-slate-600 font-semibold rounded-lg hover:shadow";