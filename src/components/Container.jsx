const Container = ({children, className, ref}) => {
  return (
    <div ref={ref} className={`container-base relative z-20 ${className}`}>
        {children}
    </div>
  )
}

export default Container

