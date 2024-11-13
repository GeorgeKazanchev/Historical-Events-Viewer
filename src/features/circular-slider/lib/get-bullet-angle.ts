import { PI, INIT_BULLETS_ANGLE_IN_RAD } from '../config/consts';

export default function getBulletAngle(
  bulletIndex: number,
  totalBullets: number,
): number {
  return INIT_BULLETS_ANGLE_IN_RAD + bulletIndex * ((2 * PI) / totalBullets);
}
