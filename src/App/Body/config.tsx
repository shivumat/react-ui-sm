import { ReactElement } from 'react'
import { NavItem } from '@/Components/Navigation/NavbarTopBar/Navbar'
import HomeContent from './Content/HomeContent'
import ButtonDoc from './Content/ComponentDocs/Inputs/Button'
import ButtonGroupDoc from './Content/ComponentDocs/Inputs/ButtonGroup'
import IconButtonDoc from './Content/ComponentDocs/Inputs/IconButton'
import InputDoc from './Content/ComponentDocs/Inputs/Input'
import TextareaDoc from './Content/ComponentDocs/Inputs/Textarea'
import SelectDoc from './Content/ComponentDocs/Inputs/Select'
import AutocompleteDoc from './Content/ComponentDocs/Inputs/AutocompleteCombobox'
import MultiSelectDoc from './Content/ComponentDocs/Inputs/MultiSelect'
import CheckboxDoc from './Content/ComponentDocs/Inputs/Checkbox'
import RadioGroupDoc from './Content/ComponentDocs/Inputs/RadioGroup'
import SwitchToggleDoc from './Content/ComponentDocs/Inputs/SwitchToggle'
import SliderRangeDoc from './Content/ComponentDocs/Inputs/SliderRange'
import NumberStepperDoc from './Content/ComponentDocs/Inputs/NumberInputStepper'
import DatePickerDoc from './Content/ComponentDocs/Inputs/DatePicker'
import TimePickerDoc from './Content/ComponentDocs/Inputs/TimePicker'
import DateTimePickerDoc from './Content/ComponentDocs/Inputs/DateTimePicker'
import ColorPickerDoc from './Content/ComponentDocs/Inputs/ColorPicker'
import FileUploadDoc from './Content/ComponentDocs/Inputs/FileUploadDropzone'
import OtpPinInputDoc from './Content/ComponentDocs/Inputs/OtpPinInput'
import RatingInputDoc from './Content/ComponentDocs/Inputs/RatingInput'
import SignaturePadDoc from './Content/ComponentDocs/Inputs/SignaturePad'
import BoxContainerDoc from './Content/ComponentDocs/LayoutStructure/BoxContainer'
import StackDoc from './Content/ComponentDocs/LayoutStructure/Stack'
import InlineDoc from './Content/ComponentDocs/LayoutStructure/Inline'
import GridDoc from './Content/ComponentDocs/LayoutStructure/Grid'
import FlexHelpersDoc from './Content/ComponentDocs/LayoutStructure/FlexHelpers'
import SpacerDoc from './Content/ComponentDocs/LayoutStructure/Spacer'
import DividerDoc from './Content/ComponentDocs/LayoutStructure/DividerSeparator'
import AspectRatioDoc from './Content/ComponentDocs/LayoutStructure/AspectRatio'
import CenterDoc from './Content/ComponentDocs/LayoutStructure/Center'
import CardDoc from './Content/ComponentDocs/LayoutStructure/Card'
import SurfacePaperDoc from './Content/ComponentDocs/LayoutStructure/SurfacePaper'
import SectionDoc from './Content/ComponentDocs/LayoutStructure/Section'
import PageShellDoc from './Content/ComponentDocs/LayoutStructure/PageShellAppShell'
import NavbarTopBarDoc from './Content/ComponentDocs/Navigation/NavbarTopBar'
import TabsDoc from './Content/ComponentDocs/Navigation/Tabs'
import BreadcrumbsDoc from './Content/ComponentDocs/Navigation/Breadcrumbs'
import PaginationDoc from './Content/ComponentDocs/Navigation/Pagination'

export type RouteNode = {
  key: string
  label: string
  path?: string
  component?: ReactElement
  children?: RouteNode[]
}

export const routeTree: RouteNode[] = [
  { key: 'home', label: 'Home', path: '', component: <HomeContent /> },
  {
    key: 'inputs',
    label: 'Inputs',
    children: [
      { key: 'inputs/button', label: 'Button', path: 'inputs/button', component: <ButtonDoc /> },
      { key: 'inputs/button-group', label: 'Button Group', path: 'inputs/button-group', component: <ButtonGroupDoc /> },
      { key: 'inputs/icon-button', label: 'Icon Button', path: 'inputs/icon-button', component: <IconButtonDoc /> },
      { key: 'inputs/input', label: 'Input', path: 'inputs/input', component: <InputDoc /> },
      { key: 'inputs/textarea', label: 'Textarea', path: 'inputs/textarea', component: <TextareaDoc /> },
      { key: 'inputs/select', label: 'Select', path: 'inputs/select', component: <SelectDoc /> },
      { key: 'inputs/autocomplete', label: 'Autocomplete', path: 'inputs/autocomplete', component: <AutocompleteDoc /> },
      { key: 'inputs/multi-select', label: 'Multi Select', path: 'inputs/multi-select', component: <MultiSelectDoc /> },
      { key: 'inputs/checkbox', label: 'Checkbox', path: 'inputs/checkbox', component: <CheckboxDoc /> },
      { key: 'inputs/radio-group', label: 'Radio Group', path: 'inputs/radio-group', component: <RadioGroupDoc /> },
      { key: 'inputs/switch-toggle', label: 'Switch Toggle', path: 'inputs/switch-toggle', component: <SwitchToggleDoc /> },
      { key: 'inputs/slider-range', label: 'Slider Range', path: 'inputs/slider-range', component: <SliderRangeDoc /> },
      { key: 'inputs/number-stepper', label: 'Number Stepper', path: 'inputs/number-stepper', component: <NumberStepperDoc /> },
      { key: 'inputs/date-picker', label: 'Date Picker', path: 'inputs/date-picker', component: <DatePickerDoc /> },
      { key: 'inputs/time-picker', label: 'Time Picker', path: 'inputs/time-picker', component: <TimePickerDoc /> },
      { key: 'inputs/date-time-picker', label: 'Date Time Picker', path: 'inputs/date-time-picker', component: <DateTimePickerDoc /> },
      { key: 'inputs/color-picker', label: 'Color Picker', path: 'inputs/color-picker', component: <ColorPickerDoc /> },
      { key: 'inputs/file-upload', label: 'File Upload', path: 'inputs/file-upload', component: <FileUploadDoc /> },
      { key: 'inputs/otp-pin', label: 'OTP PIN Input', path: 'inputs/otp-pin', component: <OtpPinInputDoc /> },
      { key: 'inputs/rating-input', label: 'Rating Input', path: 'inputs/rating-input', component: <RatingInputDoc /> },
      { key: 'inputs/signature-pad', label: 'Signature Pad', path: 'inputs/signature-pad', component: <SignaturePadDoc /> },
    ],
  },
  {
    key: 'layout',
    label: 'Layout & Structure',
    children: [
      { key: 'layout/box-container', label: 'Box / Container', path: 'layout/box-container', component: <BoxContainerDoc /> },
      { key: 'layout/stack', label: 'Stack', path: 'layout/stack', component: <StackDoc /> },
      { key: 'layout/inline', label: 'Inline', path: 'layout/inline', component: <InlineDoc /> },
      { key: 'layout/grid', label: 'Grid', path: 'layout/grid', component: <GridDoc /> },
      { key: 'layout/flex-helpers', label: 'Flex Helpers', path: 'layout/flex-helpers', component: <FlexHelpersDoc /> },
      { key: 'layout/spacer', label: 'Spacer', path: 'layout/spacer', component: <SpacerDoc /> },
      { key: 'layout/divider-separator', label: 'Divider / Separator', path: 'layout/divider-separator', component: <DividerDoc /> },
      { key: 'layout/aspect-ratio', label: 'Aspect Ratio', path: 'layout/aspect-ratio', component: <AspectRatioDoc /> },
      { key: 'layout/center', label: 'Center', path: 'layout/center', component: <CenterDoc /> },
      { key: 'layout/card', label: 'Card', path: 'layout/card', component: <CardDoc /> },
      { key: 'layout/surface-paper', label: 'Surface / Paper', path: 'layout/surface-paper', component: <SurfacePaperDoc /> },
      { key: 'layout/section', label: 'Section', path: 'layout/section', component: <SectionDoc /> },
      { key: 'layout/page-shell', label: 'Page Shell / App Shell', path: 'layout/page-shell', component: <PageShellDoc /> },
    ],
  },
  {
    key: 'navigation',
    label: 'Navigation',
    children: [
      { key: 'navigation/navbar-topbar', label: 'Navbar / Top Bar', path: 'navigation/navbar-topbar', component: <NavbarTopBarDoc /> },
      { key: 'navigation/tabs', label: 'Tabs', path: 'navigation/tabs', component: <TabsDoc /> },
      { key: 'navigation/breadcrumbs', label: 'Breadcrumbs', path: 'navigation/breadcrumbs', component: <BreadcrumbsDoc /> },
      { key: 'navigation/pagination', label: 'Pagination', path: 'navigation/pagination', component: <PaginationDoc /> },
    ],
  },
]

const flattenTree = (nodes: RouteNode[]): RouteNode[] => {
  return nodes.flatMap((node) => [node, ...(node.children ? flattenTree(node.children) : [])])
}

const flattened = flattenTree(routeTree)

export const routeComponentMap = flattened.reduce<Record<string, ReactElement>>((acc, node) => {
  if (node.path !== undefined && node.component) acc[node.path] = node.component
  return acc
}, {})

const toNavItems = (nodes: RouteNode[]): NavItem[] => {
  return nodes.map((node) => ({
    key: node.path ?? node.key,
    label: node.label,
    children: node.children ? toNavItems(node.children) : undefined,
  }))
}

export const navItems: NavItem[] = toNavItems(routeTree)
export const validPaths = Object.keys(routeComponentMap)
