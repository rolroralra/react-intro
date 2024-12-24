const user = {
  name: "Teddy",
  imageUrl: "https://i.imgur.com/kOm5JP3.gif",
  imageSize: 30,
};

export default function Profile({ name, imageUrl, imageSize }) {
  return (
    <>
      <h1>{name}</h1>
      <img
        className="avatar"
        src={imageUrl}
        alt={`Photo of ${name}`}
        style={{
          width: imageSize,
          height: imageSize,
        }}
      />
    </>
  );
}
