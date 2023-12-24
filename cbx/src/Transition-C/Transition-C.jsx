import "../../dist/output.css";
import placeholder from "./256px-Man_Silhouette2.jpg";

function TransitionC() {
  var members = [
    { name: "David", title: "title", href: "", img_src: placeholder },
    { name: "Marvin", title: "title", href: "", img_src: placeholder },
    { name: "Andy", title: "title", href: "", img_src: placeholder },
    { name: "TBC", title: "title", href: "", img_src: placeholder },
  ];
  return (
    <div class="md:w-5/6 lg:w-4/6 px-5 py-24 mx-auto">
      <div class="text-left w-full">
        <h1 class="ml-4 text-4xl font-bold fadeInSlow">Our Team</h1>
      </div>
      <br />
      <div class="flex flex-wrap m-4">
        {members.map((member) => (
          <div class="p-4 lg:w-1/4 md:w-1/2">
            <div class="h-full flex flex-col items-center text-center">
              <a href={member.href} className="opacity-0 fadeInSlow">
                <img
                  class="shadow rounded-sm object-cover h-48 aspect-[35/45] align-middle border-none"
                  src={member.img_src}
                  alt={member.name}
                />
              </a>
              <div class="p-4 text-center font-normal fadeIn">
                <p>
                  <b class="text-xl">{member.name}</b>
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
