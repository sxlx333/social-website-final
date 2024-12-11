import { MESSAGE_MAX_SIZE, MESSAGE_MIN_SIZE } from '../env.js';
import { ROLE } from './enum.js';

export class IsValid {
  /**
   *
   * @param {Object} clientData Is kliento gautas isparsintas JSON objektas
   * @param {Object[]} requiredFields Privalomu lauku validavimo taisykles
   * @param {string} requiredFields[].field Privalomo lauko pavadinimas
   * @param {Function} requiredFields[].validation Privalomo lauko reiksme validuojanti funkcija / statinis metodas
   * @returns
   */
  static requiredFields(clientData, requiredFields) {
    if (
      typeof clientData !== 'object' ||
      Array.isArray(clientData) ||
      clientData === null
    ) {
      return [true, 'Reikalingas validus objektas'];
    }

    if (Object.keys(clientData).length !== requiredFields.length) {
      const names = requiredFields.map((obj) => obj.field).join(', ');
      return [true, 'Reikalingi laukai yra: ' + names];
    }

    for (const { field, validation } of requiredFields) {
      const [err, msg] = validation(clientData[field]);

      if (err) {
        return [err, msg];
      }
    }

    return [false, 'Ok'];
  }

  /**
   * Slapyvardzio validavimas.
   * @param {string} text Slapyvardis
   * @returns {[true, string] | [false, 'Ok']}
   */
  static username(text) {
    const minSize = 3;
    const maxSize = 30;

    if (typeof text !== 'string') {
      return [true, 'Slapyvardis turi būti teksto tipo.'];
    }

    if (text.length < minSize) {
      return [
        true,
        `Slapyvardis turi būti ne trumpesnis nei ${minSize} simbolių.`,
      ];
    }

    if (text.length > maxSize) {
      return [
        true,
        `Slapyvardis turi būti ne ilgesnis nei ${maxSize} simbolių.`,
      ];
    }

    // TODO: aprasyti daugiau taisykliu

    return [false, 'Ok'];
  }

  /**
   * El. pasto adreso validavimas.
   * @param {string} text El. pasto adresas
   * @returns {[true, string] | [false, 'Ok']}
   */
  static email(text) {
    const minSize = 6;
    const maxSize = 50;
    const localPartMaxSize = 64;
    const domainPartMaxSize = 255;
    const domainSubPartMaxSize = 63;
    const abc =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+-.';
    const allowedLocalPartSymbols = abc + '_';
    const allowedDomainPartSymbols = abc;

    if (typeof text !== 'string') {
      return [true, 'El. paštas turi būti teksto tipo.'];
    }

    if (text.length < minSize) {
      return [
        true,
        `El. paštas turi būti ne trumpesnis nei ${minSize} simbolių.`,
      ];
    }

    if (text.length > maxSize) {
      return [
        true,
        `El. paštas turi būti ne ilgesnis nei ${maxSize} simbolių.`,
      ];
    }

    if (text.includes('..')) {
      return [true, `El. paštas negali turėti dviejų iš eilės einančių taskų.`];
    }

    const parts = text.split('@');

    if (parts.length < 2) {
      return [true, `El. paštas turi turėti vieną "@" simbolį.`];
    }

    if (parts.length > 2) {
      return [true, `El. paštas turi turėti tik vieną "@" simbolį.`];
    }

    const [localPart, domainPart] = parts;

    if (localPart.length > localPartMaxSize) {
      return [
        true,
        `El. pašto dalis prie "@" simbolio negali viršyti ${localPartMaxSize} simbolių.`,
      ];
    }

    if (domainPart.length > domainPartMaxSize) {
      return [
        true,
        `El. pašto dalis už "@" simbolio negali viršyti ${domainPartMaxSize} simbolių.`,
      ];
    }

    if (domainPart.includes('_')) {
      return [
        true,
        `El. pašto dalis už "@" simbolio negali turėti "_" simbolio.`,
      ];
    }

    for (const s of localPart) {
      if (!allowedLocalPartSymbols.includes(s)) {
        return [
          true,
          `El. pašto dalis prieš "@" simbolį negali turėti "${s}" simbolio.`,
        ];
      }
    }

    for (const s of domainPart) {
      if (!allowedDomainPartSymbols.includes(s)) {
        return [
          true,
          `El. pašto dalis už "@" simbolio negali turėti "${s}" simbolio.`,
        ];
      }
    }

    const domainSubParts = domainPart.split('.');

    if (domainSubParts.length < 2) {
      return [
        true,
        `El. pašto dalis už "@" simbolio nepanaši į tikro el. pašto tiekejo adresą.`,
      ];
    }

    for (const part of domainSubParts) {
      if (part.length > domainSubPartMaxSize) {
        return [
          true,
          `El. pašto dalyje už "@" simbolio tarp taškų esančios dalys negali viršyti ${domainSubPartMaxSize} simbolių kiekio.`,
        ];
      }
    }

    return [false, 'Ok'];
  }

  /**
   * Slaptazodzio validavimas.
   * @param {string} text Slaptazodis
   * @returns {[true, string] | [false, 'Ok']}
   */
  static password(text) {
    const minSize = 12;
    const maxSize = 100;

    if (typeof text !== 'string') {
      return [true, 'Slaptažodis turi būti teksto tipo.'];
    }

    if (text.length < minSize) {
      return [
        true,
        `Slaptažodis turi būti ne trumpesnis nei ${minSize} simbolių.`,
      ];
    }

    if (text.length > maxSize) {
      return [
        true,
        `Slaptažodis turi būti ne ilgesnis nei ${maxSize} simbolių.`,
      ];
    }

    return [false, 'Ok'];
  }

  static postMessage(text) {
    if (typeof text !== 'string') {
      return [true, 'Žinutė turi būti teksto tipo'];
    }

    if (text.length < MESSAGE_MIN_SIZE) {
      return [
        true,
        `Žinutė turi būti ne mažiau ${MESSAGE_MIN_SIZE} simbolių ilgio`,
      ];
    }

    if (text.length > MESSAGE_MAX_SIZE) {
      return [
        true,
        `Žinutė turi būti ne daugiau ${MESSAGE_MAX_SIZE} simbolių ilgio`,
      ];
    }

    return [false, 'Ok'];
  }

  static id(number) {
    if (typeof number !== 'number' || !Number.isInteger(number) || number < 1) {
      return [true, 'ID turi būti teigiamas sveikasis skaičius'];
    }

    return [false, 'Ok'];
  }

  static role(role) {
    if (typeof role !== 'string') {
      return [true, 'Role turi būti teksto tipo'];
    }

    const allowedOptions = Object.values(ROLE).filter(
      (role) => role !== ROLE.PUBLIC
    );
    if (!allowedOptions.includes(role)) {
      return [
        true,
        'Galimos pasirinkti rolės yra: ' + allowedOptions.join(', '),
      ];
    }

    return [false, 'Ok'];
  }
}
