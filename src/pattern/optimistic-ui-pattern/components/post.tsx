import { startTransition, useEffect, useOptimistic, useState } from "react";

export interface Comment {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: {
    id: number;
    username: string;
    fullName: string;
  };
  pending?: boolean;
  clientId?: string;
}

export default function Post() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [body, setBody] = useState("");
  const [error, setError] = useState("");

  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (state, optimisticComment: Comment) => {
      return [...state, optimisticComment];
    },
  );

  useEffect(() => {
    fetchComments();
  }, []);

  async function fetchComments() {
    try {
      const response = await fetch("https://dummyjson.com/comments?limit=5");

      const data = await response.json();

      setComments(data.comments);
    } catch {
      setError("Couldn't fetch comments");
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!body.trim()) return;

    setError("");

    const clientId = crypto.randomUUID();

    const optimisticComment: Comment = {
      id: -1,
      clientId,
      body,
      likes: 0,
      postId: 3,
      pending: true,
      user: {
        id: 5,
        username: "me",
        fullName: "Lainer",
      },
    };

    startTransition(() => {
      addOptimisticComment(optimisticComment);
    });

    setBody("");

    try {
      const response = await fetch("https://dummyjson.com/comments/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          body: optimisticComment.body,
          postId: optimisticComment.postId,
          userId: optimisticComment.user.id,
        }),
      });

      if (!response.ok) {
        throw new Error();
      }

      const serverComment = await response.json();

      setComments((prev) => [
        ...prev,
        {
          id: serverComment.id,
          body: serverComment.body,
          likes: serverComment.likes,
          postId: serverComment.postId,
          user: optimisticComment.user,
        },
      ]);
    } catch {
      setError("Couldn't send the comment.");
      setComments((prev) => [...prev]);
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-10 space-y-6">
      <h1 className="text-3xl font-bold">Comments</h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={4}
          placeholder="Write a comment..."
          className="w-full border rounded-md p-3"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2"
        >
          Send
        </button>
      </form>

      {error && (
        <div className="rounded bg-red-100 text-red-600 p-3">{error}</div>
      )}

      <div className="space-y-4">
        {optimisticComments.map((comment) => (
          <article
            key={comment.clientId ?? comment.id}
            className="border rounded-lg p-4 shadow-sm"
          >
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">{comment.user.fullName}</h2>

              {comment.pending && (
                <span className="text-xs text-blue-600 font-medium">
                  Sending...
                </span>
              )}
            </div>

            <p className="mt-2">{comment.body}</p>

            <p className="text-sm text-gray-500 mt-2">❤️ {comment.likes}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
