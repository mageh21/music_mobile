export enum MidiControllerMessage {
  BankSelect_Coarse = 0x00,
  ModulationWheel_Coarse,
  BreathController_Coarse,
  FootController_Coarse,
  PortamentoTime_Coarse,
  DataEntry_Coarse,
  ChannelVolume_Coarse,
  Balance_Coarse,
  Pan_Coarse = 0x0a,
  Expression_Coarse,
  EffectControl1_Coarse,
  EffectControl2_Coarse,
  GeneralPurposeController1 = 0x10,
  GeneralPurposeController2,
  GeneralPurposeController3,
  GeneralPurposeController4,
  BankSelect_Fine = 0x20,
  ModulationWheel_Fine,
  BreathController_Fine,
  FootController_Fine = 0x24,
  PortamentoTime_Fine,
  DataEntry_Fine,
  ChannelVolume_Fine,
  Balance_Fine,
  Pan_Fine = 0x2a,
  Expression_Fine,
  EffectControl1_Fine,
  EffectControl2_Fine,
  HoldPedal1_OnOff = 0x40,
  PortamentoPedal_OnOff,
  SostenutoPedal_OnOff,
  SoftPedal_OnOff,
  LegatoPedal_OnOff,
  HoldPedal2_OnOff,
  SoundController1,
  SoundController2,
  SoundController3,
  SoundController4,
  SoundController5,
  SoundController6,
  SoundController7,
  SoundController8,
  SoundController9,
  SoundController10,
  GeneralPurposeController5,
  GeneralPurposeController6,
  GeneralPurposeController7,
  GeneralPurposeController8,
  PortamentoControl,
  HighResolutionVelocityPrefix = 0x58,
  Effect1Depth = 0x5b,
  Effect2Depth,
  Effect3Depth,
  Effect4Depth,
  Effect5Depth,
  DataButtonIncrement,
  DataButtonDecrement,
  NonRegisteredParameter_Coarse,
  NonRegisteredParameter_Fine,
  RegisteredParameter_Coarse,
  RegisteredParameter_Fine,
  AllSoundOff = 0x78,
  AllControllersOff,
  LocalControl_OnOff,
  AllNotesOff,
  OmniModeOff,
  OmniModeOn,
  PolyModeOff,
  PolyModeOn,
}
