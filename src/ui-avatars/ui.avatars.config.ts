export type UiAvatarsSettingsType = {
  /**
   * The name used to generate initials.
   * You can specify the initials yourself as well.
   */
  name?: string;
  /**
   * Hex color for the image background, without the hash (#).
   */
  background?: string;
  /**
   * Hex color for the font, without the hash (#).
   */
  color?: string;
  /**
   * Avatar image size in pixels. Between: 16 and 512.
   */
  size?: number;
  /**
   * Font size in percentage of size. Between 0.1 and 1.
   */
  fontsize?: number;
  /**
   * Length of the generated initials.
   */
  length?: number;
  /**
   * Boolean specifying if the returned image should be a circle.
   */
  rounded?: boolean;
  /**
   * Boolean specifying if the returned letters should use a bold font.
   */
  bold?: boolean;
  /**
   * Decide if the API should uppercase the name/initials.
   */
  uppercase?: boolean;
};
