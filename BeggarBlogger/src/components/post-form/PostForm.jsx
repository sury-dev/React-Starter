import React, {useCallback} from 'react'
import {useForm} from 'react-hook-form'
import { Button, Input, RTE } from '../index'
import appwriteService from '../../services/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostForm({post}) {

    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        useForm: {
            title : post?.title || "",
            slug : post?.slug || "",
            content : post?.content || "",
            status : post?.status || "active"
        }
    })

    const navigate = useNavigate()

    const userData = useSelector(state => state.user.userData)

    const submit = async (data) => {
        if(post){
            data.image[0] ? appwriteService.upl : null
        }
    }

    return (
        <div>

        </div>
    )
}

export default PostForm
