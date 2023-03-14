import { Component } from "react";
import ErrorMessage from "../errorMessage/errorMessage";
//Предохранитель - компонент ловящий ошибку
class ErrorBoundary extends Component {
  state = { //state с error false
    error: false,
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({
      error: true,
    })
  }
  render() {
    if (this.state.error === true) {
      return (
        <ErrorMessage/>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;