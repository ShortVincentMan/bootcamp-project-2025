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

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutesStr = minutes < 10 ? '0' + minutes : String(minutes);

    return `${month} ${day}, ${year} at ${hours}:${minutesStr} ${ampm}`;
}

export default function Comment ({ comment }: CommentProps) {
    return (
        <div className = {styles.commentContainer}>
            <h4 className={styles.username}>
                {comment.username}
            </h4>
            <p className={styles.content}>{comment.content}</p>
            <small className={styles.date}>{parseCommentTime(comment.date)}</small>
        </div>
    )
};