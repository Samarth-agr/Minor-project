import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://th.bing.com/th/id/OIP.2unAur3isClWZ8Sp2YT6YQHaE8?pid=ImgDet&rs=1" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit 
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit">edit</i>
                    <i className="singlePostIcon far fa-trash-alt">Del</i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Safak</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae a omnis rerum mollitia nisi deserunt quod accusantium vel ab eveniet architecto perferendis exercitationem corporis tempore iste natus aut possimus, magni aperiam in eum facilis. Necessitatibus illo hic veritatis consequuntur provident aut fugiat, exercitationem quia vel.
            </p>
        </div>
    </div>
  )
}
