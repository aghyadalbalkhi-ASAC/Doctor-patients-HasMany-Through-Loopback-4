import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DoctorDataSource} from '../datasources';
import {Patient, PatientRelations} from '../models';

export class PatientRepository extends DefaultCrudRepository<
  Patient,
  typeof Patient.prototype.pid,
  PatientRelations
> {
  constructor(
    @inject('datasources.Doctor') dataSource: DoctorDataSource,
  ) {
    super(Patient, dataSource);
  }
}
