import "./icon.scss";

enum AvailableIcons {
  "logo_trimmed",
  "logo_welbex",
  "viber",
  "telegram",
  "whatsapp"
}

type IconProps = {
  icon: keyof typeof AvailableIcons;
  width?: number;
  height?: number;
  noAspectRatio?: true;
};

const Icon: React.FC<IconProps> = ({ icon, width, height, noAspectRatio }) => {
  return <i className={"icon"} style={{ width, height, WebkitMask: `url(/svg/${icon}.svg) no-repeat 50% 50%`, WebkitMaskSize: "contain", aspectRatio: !noAspectRatio ? "1/1" : "auto" }} />;
};

export default Icon;
