import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <spam className="sidebarTitle">ABOUT ME</spam>
        <img src="https://th.bing.com/th/id/R.a907d677c431bce00de184a862f57acd?rik=vkumNdo6mq7z9A&riu=http%3a%2f%2ftravelguidecompany.com%2fwp-content%2fuploads%2f2018%2f03%2ftravel-and-tours-background-8.jpg&ehk=z%2fua8oLkupsyc70RV4oyFvmXSjEd64RddvCC%2fwKG8V4%3d&risl=&pid=ImgRaw&r=0" alt="" />
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore incidunt atque adipisci illum at, perspiciatis ducimus. Ad amet vero fugiat. Alias illum, tempora commodi laboriosam velit minus eum soluta corrupti.
        </p>
      </div>
      <div className="sidebarItems">
        <spam className="sidebarTitle">CATEGORIES</spam>
        <ul className="sidebarList">
            {/* <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li> */}
        </ul>
      </div>
      <div className="sidebarItem">
        <spam className="sidebarTitle">FOLLOW US</spam>
        <div className="sidebarSocial"></div>
      </div>
    </div>
  )
}
