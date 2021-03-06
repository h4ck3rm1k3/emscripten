#ifndef _IOCTL_H
#define _IOCTL_H

#ifdef __cplusplus
extern "C" {
#endif

#define SIOCGIFCONF 1 // bogus value
#define SIOCGIFNETMASK 2 // bogus value

int ioctl(int d, int request, ...);

#define SO_RCVTIMEO 1000
#define SO_SNDTIMEO 2000

#ifdef __cplusplus
}
#endif

#endif
