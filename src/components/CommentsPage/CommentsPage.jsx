import React, {useEffect} from "react"
import style from "../AllCoursesPage/AllCourses.module.css"
import LoadingError from "../LoadingError/LoadingError";
import { Vortex } from 'react-loader-spinner'
import CommentItem from "./CommentItem/CommentItem";
import {useComments} from "../../store";
import {shallow} from "zustand/shallow";


let CommentsPage = () => {
    const { comments, loading, error, fetchComments } = useComments((state) => ({
        comments: state.comments,
        loading: state.loading,
        error: state.error,
        fetchComments: state.fetchComments
    }))

    useEffect(() => {
        fetchComments(1, 10)
        }, [])

    if (loading) {
        return <Vortex
            visible={true}
            height="80"
            width="80"
            ariaLabel="vortex-loading"
            wrapperStyle={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}
            wrapperClass="vortex-wrapper"
            colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
        />
    }

    if (error) {
        return <LoadingError title={"Ошибка при загрузке комментариев"} descripton={"Если ошибка с нашей стороны, то мы уже скоро починим ее. Приносим свои извинения!"}/>
    }

    return (
        <div>
            <ul className={style.cards}>
                {comments.map((comment) =>
                    <CommentItem comment={comment} />
                )}
            </ul>
        </div>
    )
}

export default CommentsPage;