import { getUserSession } from "../../utils/cookies";

export default function AboutUs() {
  const user = getUserSession();

  if (user === null) {
    return (
      <div className="App">
        This is the About us page, to view please login first
      </div>
    );
  }
  return (
    <div className="App">
      <h1>About us page</h1>
      <div
        style={{
          maxWidth: "50%",
          margin: "0 auto",
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia
          vitae tellus sit amet pharetra. Sed efficitur, urna venenatis pulvinar
          sagittis, erat dui volutpat diam, at feugiat arcu lorem sit amet erat.
          Sed mollis diam quis purus pellentesque, eget lobortis elit elementum.
          Aenean mollis, dui ut gravida hendrerit, ligula nibh lobortis quam, ut
          tempus tellus nisl nec purus. Donec quis risus nec tortor congue
          vehicula. Donec vehicula sem velit, et varius purus viverra id. Nullam
          at magna et sem mollis eleifend. Vivamus at ligula at nunc vehicula
          volutpat. Cras non mauris nunc. Fusce tristique erat tortor, a
          malesuada nunc scelerisque ac. Morbi rutrum augue a aliquam pulvinar.
          Integer lacinia sollicitudin orci lobortis sollicitudin. Phasellus
          scelerisque porta nunc a semper. Sed sed eleifend ex. Suspendisse
          blandit, erat quis ullamcorper aliquet, quam orci tristique metus, non
          dapibus neque nisi quis est. Sed placerat mollis erat, vitae dapibus
          metus laoreet eu. Nam efficitur nunc ac nunc congue hendrerit.
          Vestibulum nisl neque, consequat eu faucibus in, porta eu lacus. Nam
          rhoncus elementum vestibulum. Donec hendrerit felis in ex accumsan
          iaculis. In hac habitasse platea dictumst. Etiam sed rutrum libero.
          Donec congue dui vel mauris cursus, a tristique sem efficitur.
          Curabitur suscipit vestibulum mi, eget tincidunt quam vehicula non.
          Maecenas sagittis tristique sem nec fermentum. Etiam sagittis vitae
          eros non interdum. Aliquam et diam sed dui consectetur egestas.
        </p>
        <p>
          Aliquam erat lacus, semper non risus et, blandit tincidunt ligula.
          Aenean leo ante, pretium vitae massa nec, eleifend ultrices diam. In
          hac habitasse platea dictumst. Praesent dictum, sapien et blandit
          finibus, nulla dui auctor justo, id condimentum neque nisl in metus.
          Aliquam luctus nec tortor at rutrum. Sed euismod, velit vel euismod
          ullamcorper, ligula augue accumsan risus, vel vestibulum est est
          molestie felis. Nulla mattis aliquam neque, eget gravida nibh varius
          sit amet. Fusce imperdiet lacinia ipsum at lobortis. Suspendisse
          viverra lectus a mi hendrerit feugiat. Nulla facilisi. Phasellus
          aliquam justo vitae mollis iaculis. Integer viverra nulla sed pretium
          viverra. Fusce sagittis lorem mauris, ac pellentesque est suscipit in.
          In at placerat tortor, at aliquam massa. Aliquam erat volutpat. Nam eu
          nisl id ipsum porttitor cursus vel eu ex. Nulla rhoncus est sed leo
          ultrices, a dignissim orci luctus. In nec pharetra elit. Nullam ac
          diam sem. Ut lacinia libero vitae enim facilisis tristique.
        </p>
      </div>
    </div>
  );
}
