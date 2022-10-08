import Link from "next/link";
import React from "react";
import { courses } from "./placeholder";

export default function Learn() {
    return (
        <div>
            <h1 className="text-6xl ">Select a Course</h1>
            <h2 className="text-4xl text-white-500">
                Select a course to make quizzes out of it
            </h2>
            {courses.map((course) => (
                <div className="p-8 m-6 bg-slate-600 rounded-sm">
                    <Link href={`/learn/${course.id}`} key={course.id}>
                        <a>
                            <h3>{course.name}</h3>
                            <p>{course.description}</p>
                            <div>
                                {course.tags.map((tags) => (
                                    <span
                                        className="p-1 m-1 rounded-sm bg-slate-300"
                                        key={tags}
                                    >
                                        {tags.toLowerCase()}
                                    </span>
                                ))}
                            </div>
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    );
}
