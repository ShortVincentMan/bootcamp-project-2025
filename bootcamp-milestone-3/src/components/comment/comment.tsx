type CommentProps = {
    comment: Comment;
};

function parseCommentTime(timestamp: Date){
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'});
}

function Comment({ comment }: CommentProps) {
    return (
        <div>
            <h4>
                {comment.username}
            </h4>
            <p>{comment.content}</p>
            <small>{parseCommentTime(comment.date)}</small>
        </div>
    )
}

export default Comment;