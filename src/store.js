import create from "zustand";
import {createJSONStorage, devtools, persist} from "zustand/middleware"
import Csharp from "./assets/images/main-page/c.png";
import Cplus from "./assets/images/main-page/c++.png";
import python from "./assets/images/main-page/python.png";
import java from "./assets/images/main-page/java.png";
import axios from "axios";
import toast from "react-hot-toast";
const errorMessage = (message) => toast.error(message)
const notify = (message) => toast(message)
export const useCourses = create(set => ({
    courses: [],
    loading: false,
    error: null,
    fetchCourses: async () => {
        set({loading: true})

        try {
            const response = await fetch("http://localhost:5000/courses?page=1&limit=10")

            if (!response.ok) return new Error('Failed to fetch! Try again.')

            set({courses: await response.json(), error: null})
        } catch (error) {
            set({error: error.message})
        } finally {
            set({loading: false})
        }
    }
}))

export const useTopCourses = create(() => ({
    topCoursesData: [
        {id: 1, link: Csharp, alt: "C# Course", path: "#"},
        {id: 2, link: Cplus, alt: "C++Course", path: "#"},
        {id: 3, link: python, alt: "Python Course", path: "#"},
        {id: 4, link: java, alt: "Java Course", path: "#"}
    ],
    loading: false,
    error: null,
}))

export const useUser = create(devtools(persist((set, get) => ({
    userEmail: null,
    userToken: null,
    userId: null,
    authorized: false,
    loading: false,
    login: async (email, password) => {
        set({loading: true})

        const postData = {
            email: email,
            password: password
        };

        try {
            await axios.post('http://localhost:5000/auth/login', postData)
                .then((response) => {
                    set({
                        userEmail: response.data.payload.email,
                        userToken: response.data.access_token,
                        userId: response.data.payload.id,
                        authorized: true
                    })
                })
                .catch((error) => {
                    if (error.response && error.response.status === 401) {
                        errorMessage("Неверный логин или пароль")
                    } else {
                        errorMessage(`Произошла ошибка: ${error.message}`);
                    }
                });
        } finally {
            set({loading: false})
        }
    },

    register: async (email, password) => {
        set({loading: true})
        const postData = {
            email: email,
            password: password
        };

        try {
            await axios.post("http://localhost:5000/users", postData)
                .then(() => {
                    get().login(email, password)
                })

        } catch (error) {
            if (error.response && error.response.status === 409) {
                errorMessage(`User with the same email: ${email} already exists`)
            } else {
                errorMessage(`Произошла ошибка: ${error.message}`);
            }
        }  finally {
            set({loading: false})
        }
    }
}), {
    name: 'user-storage', // Имя хранилища
    storage: createJSONStorage(() => sessionStorage)
})))

export const useComments = create((set, get) => ({
    comments: [],
    page: 1,
    limit: 10,
    loading: false,
    error: null,
    fetchComments: async () => {
        set({loading: true})

        try {
            const response = await fetch(`http://localhost:5000/comments?page=${get().page}&limit=${get().limit}`)

            if (!response.ok) return new Error('Failed to fetch! Try again.')
            const data = await response.json()
            set({comments: data.rows, error: null})
        } catch (error) {
            set({error: error.message})
        } finally {
            set({loading: false})
        }
    }
}))