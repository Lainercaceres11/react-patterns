import { Component } from "react";

interface ErrorBoundaryProps {
  onReset?: () => void;
  children?: React.ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  handleRetry = () => {
    this.setState({ error: null });
    this.props.onReset?.();
  };

  render() {
    if (this.state.error) {
      return (
        <div className="p-3 border-2 border-gray-500 rounded">
          <p className="text-xl mb-3">{this.state.error.message}</p>
          <button
            className="bg-amber-500 rounded-md px-3 py-1 text-black cursor-pointer"
            onClick={this.handleRetry}
            type="button"
          >
            Retry
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
