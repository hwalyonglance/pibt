export type TPersonilPid = 1
                        |  2
                        |  3
                        |  4
                        |  5
                        |  6
                        |  8
                        |  9
                        |  10
                        |  11
                        |  12
                        |  13
                        |  14
                        |  15
                        |  16
                        |  17
                        |  19
                        |  20
                        |  21
                        |  22
                        |  23;

export interface IPersonil {
  pid: TPersonilPid;
  nama: string;
  panggilan: string;
}

export type IPersonilByPid = {
  [key in TPersonilPid]:IPersonil
};