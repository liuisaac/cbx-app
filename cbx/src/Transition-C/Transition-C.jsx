// import "../../dist/output.css";
import placeholder from "./256px-Man_Silhouette2.jpg";

function TransitionC() {
  var members = [
    { key:0, name: "David", title: "title", href: "", img_src: placeholder },
    { key:1, name: "Marvin", title: "title", href: "", img_src: placeholder },
    { key:2, name: "Andy", title: "title", href: "", img_src: placeholder },
    { key:3, name: "TBC", title: "title", href: "", img_src: placeholder },
  ];
  return (
    <div className="md:w-5/6 lg:w-4/6 px-5 py-24 mx-auto text-white">
      <div className="text-left w-full">
        <h1 className="ml-4 text-4xl font-bold fadeInSlow">Our Team</h1>
      </div>
      <br />
      <div className="flex flex-wrap m-4">
        {members.map((member) => (
          <div key={member.key} className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <a href={member.href} className="opacity-0 fadeInSlow">
                <img
                  className="shadow rounded-sm object-cover h-48 aspect-[35/45] align-middle border-none"
                  src={member.img_src}
                  alt={member.name}
                />
              </a>
              <div className="p-4 text-center font-normal fadeIn">
                <p>
                  <b className="text-xl">{member.name}</b>
                  <br />
                  <span>{member.title}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TransitionC;
