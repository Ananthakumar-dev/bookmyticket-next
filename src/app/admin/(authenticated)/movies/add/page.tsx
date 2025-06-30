import React from 'react'
import MovieForm from "@/app/admin/(authenticated)/movies/form"

const Page = () => {
    return (
        <div className="container p-4 space-y-4">
            <div>
                <h2>Add Theater</h2>
                <p> Here add new theater config </p>
            </div>

            <MovieForm
                defaultValues = {{
                    title: '',
                    description: '',
                    duration: 0,
                    release_date: new Date(),
                    genre: [],
                    status: '',
                    language: '',
                    poster_url: '',
                    trailer_url: '',
                    certification: '',
                    language_versions: [],
                    casts: [
                        {
                            name: '',
                            role: 'actor',
                            image: '',
                            imageUrl: ''
                        }
                    ]
                }}
            />
        </div>
    )
}
export default Page
