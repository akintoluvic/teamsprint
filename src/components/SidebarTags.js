import React from 'react';
import { Link } from "react-router-dom";

export default function SidebarTags() {
    return (
        <div className='sidebar-tags'>
            <h3>Tags</h3>
            <div className='links'>
                <Link to="/public" className='link'>work stuff</Link>
                <hr />
                <Link to="/public" className='link'>fun time</Link>
                <hr />
                <Link to="/public" className='link'>tags</Link>
                <hr />
                <Link to="/public" className='link'>create-post</Link>
                <hr />
            </div>
        </div>
    )
}
