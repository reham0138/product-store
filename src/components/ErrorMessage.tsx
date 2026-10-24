interface ErrorMessageProps{
    message: string;
}
const ErrorMessage = ({message}:ErrorMessageProps) => {
  return (
    <div className="rounded border border-red-300 bg-red-50 p-4 text-center text-red-700">
        <p>{message}</p>
    </div>
  )
}

export default ErrorMessage
