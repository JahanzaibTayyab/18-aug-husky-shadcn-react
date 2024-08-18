export default function Profile() {
  const user = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };
  return (
    <>
      <h1 className="font-bold text-lg">{user.name}</h1>
      <img
        className={"rounded-lg"}
        width={400}
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}
