import React from 'react';
import cl from "./Users.module.css";
import personImg from "../../assets/image/Users/person.png";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

const Users = (props) => {
    return (
        <div>
            {props.users.map(u =>
                <div key={u.id}>
                    <div className={cl.user}>
                        <div className={cl.img_container}>
                            <NavLink to={"/profile/" + u.id}>
                                <img alt="" className={cl.img}
                                     src={u.photos.small != null ? u.photos.small : personImg}/>
                            </NavLink>
                        </div>
                        <span className={cl.userDescription}>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                        <div>
                            {u.followed ?
                                <button
                                    disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {props.unfollowThunk(u.id)}
                                    }>Unfollow</button> :
                                <button
                                    disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {props.followThunk(u.id)}}>Follow</button>}
                        </div>
                    </div>
                </div>)}
            <Paginator totalItemsCount={props.totalUsersCount}
                       pageSize={props.pageSize} {...props} countItemPages ={5}/>
        </div>
    );
};

export default Users;
