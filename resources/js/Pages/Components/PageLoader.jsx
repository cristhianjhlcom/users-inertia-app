export default function PageLoader({ show }) {
    if (!show) return null;

    return (
        <div className="fixed top-0 left-0 z-20 w-full h-full flex items-center justify-center bg-gray-900 backdrop-filter backdrop-blur-sm bg-opacity-50">
            <div className="text-white text-center">
                <p className="text-2xl font-semibold">Cargando...</p>
            </div>
        </div>
    );
}
