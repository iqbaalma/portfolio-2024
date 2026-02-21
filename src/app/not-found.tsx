import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="max-w-md text-center">
          <h1 className="text-7xl font-bold text-gray-900">404</h1>

          <h2 className="mt-4 text-2xl font-semibold text-gray-800">
            Halaman Tidak Ditemukan
          </h2>

          <p className="mt-3 text-gray-500">
            Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
          </p>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center rounded-full bg-blue-700 text-white px-6 py-3 text-sm font-medium hover:bg-orange-600"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
