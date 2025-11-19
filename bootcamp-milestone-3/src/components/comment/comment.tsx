import type IComment from "@/database/commentSchema";   
import styles from "./comment.module.css";

type IComment = {
    username: string;
    content: string;
    date: Date;
};

type CommentProps = {
    comment: IComment;
};

function parseCommentTime(timestamp: Date){
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'});
}

function Comment({ comment }: CommentProps) {
    return (
        <div className = {styles.commentContainer}>
            <h4 className={styles.username}>
                {comment.username}
            </h4>
            <p className={styles.content}>{comment.content}</p>
            <small className={styles.date}>{parseCommentTime(comment.date)}</small>
        </div>
    )
}

export default Comment;
export type { IComment };