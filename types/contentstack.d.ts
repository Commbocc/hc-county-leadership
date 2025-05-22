interface CountyLeadershipEntry {
  uid: string;
  _version: number;
  locale: string;
  ACL: Acl;
  _in_progress: boolean;
  created_at: string;
  created_by: string;
  sections: Section[];
  tags: any[];
  title: string;
  updated_at: string;
  updated_by: string;
  publish_details: PublishDetails2;
}

interface Acl {}

interface Section {
  title: string;
  leaders: Leader[];
  _metadata: Metadata;
}

interface Leader {
  _content_type_uid: string;
  uid: string;
  _version: number;
  locale: string;
  ACL: Acl2;
  _in_progress: boolean;
  admin_assistant: AdminAssistant[];
  created_at: string;
  created_by: string;
  cs_headshot: any;
  emails: Email[];
  full_name: string;
  headshot: Headshot[];
  job_title: string;
  location: Location[];
  location_note: string;
  phones: Phone[];
  sitecore_guid: string;
  tags: any[];
  taxonomies: any[];
  title: string;
  updated_at: string;
  updated_by: string;
  publish_details: PublishDetails;
}

interface Acl2 {}

interface AdminAssistant {
  uid: string;
  _content_type_uid: string;
  emails: Email[];
  full_name: string;
}

interface Email {
  address: string;
  _metadata: Metadata;
  type: string;
}

interface Metadata {
  uid: string;
}

interface Headshot {
  public_id: string;
  resource_type: string;
  type: string;
  format: string;
  version: number;
  url: string;
  secure_url: string;
  width: number;
  height: number;
  bytes: number;
  duration: any;
  tags: any[];
  metadata: Metadata2;
  created_at: string;
  access_mode: string;
  access_control: any[];
  created_by: CreatedBy;
  uploaded_by: UploadedBy;
  folder_id: string;
  id: string;
  display_name: string;
  asset_folder: string;
}

interface Metadata2 {
  description: string;
  exclude_from_search_results: string;
  tags: string[];
}

interface CreatedBy {
  type: string;
  id: string;
}

interface UploadedBy {
  type: string;
  id: string;
}

interface Location {
  uid: string;
  _content_type_uid: string;
}

interface Phone {
  number: number;
  _metadata: Metadata3;
  extension: any;
  type: string;
}

interface Metadata3 {
  uid: string;
}

interface PublishDetails {
  time: string;
  user: string;
  environment: string;
  locale: string;
}

interface Metadata {
  uid: string;
}

interface PublishDetails2 {
  time: string;
  user: string;
  environment: string;
  locale: string;
}
