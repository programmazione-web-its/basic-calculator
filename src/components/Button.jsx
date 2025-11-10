import classNames from 'classnames'
export default function Button({ title, icon, onClick }) {
  return (
    <button
      className={classNames(
        'flex items-center justify-center  gap-2  my-3 font-semibold text-xl transition-colors cursor-pointer',
        {
          'w-[40px] h-[40px] bg-secondary rounded-full': icon && !title,
          'bg-primary px-3 py-1 rounded-lg font-sans border border-primary hover:bg-transparent hover:text-primary': title,
        }
      )}
      onClick={onClick}
    >
      {title && title}
      {icon && <>{icon}</>}
    </button>
  )
}
