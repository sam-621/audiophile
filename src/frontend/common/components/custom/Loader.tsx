import LinearProgress from '@material/react-linear-progress'

export const Loader = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full">
      <LinearProgress />
    </div>
  )
}
