import React from "react";

type ErrorBoundaryProps = {
  fallback: React.ComponentType<{ error: Error | null; onRetry: () => void }>;
  children: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
  retryKey: number;
};

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false, error: null, retryKey: 0 };
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log("error", error);
    console.log("errorInfo", errorInfo);
  }

  handleRetry = () =>
    this.setState((prev) => ({
      hasError: false,
      error: null,
      retryKey: prev.retryKey + 1,
    }));

  render(): React.ReactNode {
    const { hasError, error, retryKey } = this.state;
    const { fallback: Fallback, children } = this.props;

    if (hasError) {
      return <Fallback error={error} onRetry={this.handleRetry} />;
    }

    return <div key={retryKey}>{children}</div>;
  }
}
