export default function Footer() {
  return (
    <footer className='bg-gray-200'>
      <div className='container px-4 mx-auto pt-1 pb-2'>
        <p className='text-gray-700 text-center text-sm mt-4'>
          &copy; {new Date().getFullYear()}, Mamadou Aliou Diallo. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  )
}
